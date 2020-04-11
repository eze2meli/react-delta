/**
 *
 * AppPageSwagger
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import './styles.css';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-github';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import testYaml from './test.yml';

import makeSelectAppPageSwagger from './selectors';
import reducer from './reducer';
import saga from './saga';
import SwaggerToolbox from '../../components/SwaggerToolbox';
import yaml from '../../utils/yaml';
import YamlReorderer from '../../components/YamlReorderer';

export function AppPageSwagger() {
  useInjectReducer({ key: 'appPageSwagger', reducer });
  useInjectSaga({ key: 'appPageSwagger', saga });
  // refs
  const refs = { aceEditor: React.createRef() };
  // inits
  const { object, ex } = yaml.parse(testYaml);
  let initEditorText = testYaml;
  if (!ex) {
    initEditorText = yaml.dump(object);
  }
  // State Hooks
  const [editorText, setEditorText] = useState(initEditorText);
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  // Aux funcs
  const calculateParent = selection => {
    const { row } = selection.cursor;
    const { $lines } = selection.doc || [''];
    const actualLine = $lines[row] || '';
    let parentLine = actualLine;
    if (actualLine.length === 0 || row === 0) {
      return [actualLine, parentLine];
    }
    // determine line beginning by whitespaces
    let begin = 0;
    for (let i = 0; i < actualLine.length; i += 1) {
      if (actualLine.charAt(i) !== ' ') {
        begin = i;
        break;
      }
    }
    if (!actualLine.startsWith('-')) {
      if (begin === 0) {
        return [actualLine, parentLine];
      }
      if (actualLine.charAt(begin) !== '-') {
        begin -= 1;
      }
    }
    // lookup parent
    for (let i = row; i > 0; i -= 1) {
      const line = $lines[i] || '';
      if (line.length === 0) {
        break;
      }
      const charAt = line.charAt(begin);
      if (' -'.includes(charAt)) {
        // its a subNode, we have to go up
      } else {
        parentLine = line;
        break;
      }
    }
    return [actualLine, parentLine];
  };
  const onCursorChange = selection => {
    setRow(selection.cursor.row);
    setColumn(selection.cursor.column);
  };
  const goTo = r => {
    refs.aceEditor.current.editor.gotoLine(r, column);
    refs.aceEditor.current.editor.focus();
    setRow(r);
  };
  return (
    <div className="row">
      <Helmet>
        <title>AppPageSwagger</title>
        <meta name="description" content="Description of AppPageSwagger" />
      </Helmet>
      <div className="col-5 scroll-y">
        <pre style={{ height: 'calc(100vh - 44px)' }}>
          {JSON.stringify(yaml.parse(editorText).object, null, 2)}
        </pre>
      </div>
      <div className="col-4 px-0 spa-container">
        <div className="reorderer-controls">
          <YamlReorderer
            row={row}
            rowProp={goTo}
            text={editorText}
            textProp={setEditorText}
          />
        </div>
        <AceEditor
          editorProps={{ $blockScrolling: true }}
          height="calc(100vh - 44px - 38px)"
          mode="yaml"
          name="ace-editor"
          onChange={e => setEditorText(e)}
          onCursorChange={onCursorChange}
          ref={refs.aceEditor}
          theme="github"
          value={editorText}
          width="100%"
        />
      </div>
      <div className="col-3">
        <SwaggerToolbox
          row={row}
          rowProp={goTo}
          text={editorText}
          textProp={setEditorText}
        />
      </div>
    </div>
  );
}

AppPageSwagger.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  appPageSwagger: makeSelectAppPageSwagger(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AppPageSwagger);
