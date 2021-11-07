import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CloudArrowUpFill, FolderPlus } from 'react-bootstrap-icons';
import FormModal from './FormModal';
import PathForm from './forms/PathForm';
import DropFilesForm from './forms/DropFilesForm';
import FilesForm from './forms/FilesForm';
import MkDirForm from './forms/MkDirForm';
import Dirent from './Dirent';
import api from '../api/api';
import Loading from './Loading';
import FileDownload from 'js-file-download';

class Dir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      success: false,
      dir: {},
    };
  }

  componentDidMount() {
    this.loadContent();
  }

  reload() {
    this.setState({ loading: true });
    this.loadContent();
  }

  async loadContent() {
    try {
      const dir = await api.getContent(this.props.match.params.path || '');
      if (dir.success) {
        this.setState({ loading: false, success: true, dir });
      } else {
        this.setState({ loading: false, success: false, dir: {} });
      }
    } catch (e) {
      this.setState({ loading: false, success: false, dir: {} });
    }
  }

  removeFile = async (path, name, absolutePath) => {
    const dir = await api.rmFile(path, name, absolutePath);
    if (dir.state) {
      this.loadContent();
    }
  }

  downloadFile = async(path, name)=>{
    const dir = await api.dwFile(path, name);
    FileDownload(dir,name);
  }

  fillEntries() {

    if (this.state.loading) {
      return <Loading title="Loading Files and Directories..." />;
    }

    if (!this.state.loading && !this.state.success) {
      const path = this.props.match.params.path;

      const directories = [
        <Dirent
          name="Up a dir..."
          key="parent"
          isDirectory
          parentDirectory
          path={path}
        />,
      ];

      return [...directories];
    } else {

      const content = this.state.dir.content;
      const path = this.props.match.params.path;
      const absolutePath = this.state.dir.absolutePath;

      const directories = [
        <Dirent
          name="Up a dir..."
          key="parent"
          isDirectory
          parentDirectory
          path={path}
        />,
      ];
      content.directories.forEach((dir) =>
        directories.push(<Dirent name={dir} isDirectory key={dir} path={path} />)
      );

      const files = content.files.map((file) => (
        <Dirent name={file} key={file} path={path} removeFile={this.removeFile} downloadFile={this.downloadFile} absolutePath={absolutePath} />
      ));

      return [...directories, ...files];
    }
  }

  render() {
    const rowProps = { className: 'mx-auto mb-3' };
    const iconStyle = { color: '#FFF', size: 24, className: 'ml-2' };
    const path = this.props.match.params.path;

    return (
      <Container>
        <Row {...rowProps}>
          <Col>
            <PathForm path={path} />
          </Col>
        </Row>
        <h1 className="text-center">Content</h1>
        <Row {...rowProps}>
          <Col>
            <DropFilesForm success={!this.state.success} uploadTo={path} reload={() => this.reload()} />
          </Col>
        </Row>
        <Row {...rowProps}>
          <Col>
            <FormModal
              success={!this.state.success}
              btn="primary"
              title="Upload Files"
              icon={<CloudArrowUpFill {...iconStyle} />}
            >
              <FilesForm uploadTo={path} reload={() => this.reload()} />
            </FormModal>
          </Col>
        </Row>
        <Row {...rowProps}>
          <Col>
            <FormModal
              success={!this.state.success}
              btn="success"
              title="Create Directory"
              icon={<FolderPlus {...iconStyle} />}
            >
              <MkDirForm path={path} reload={() => this.reload()} />
            </FormModal>
          </Col>
        </Row>
        <Row {...rowProps}>{this.fillEntries()}</Row>
      </Container>
    );
  }
}

export default Dir;
