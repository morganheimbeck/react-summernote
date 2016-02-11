import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Summer from 'summernote';
import cx from 'classname';

export default class Summernote extends React.Component {
    componentWillMount() {
        this.setState({id: (new Date).getTime()})
        $(this.state.id).summernote();
    }
    componentWillUnMount() {
        $(this.state.id).summernote('destroy');
    }
    render() {
        const {id} = this.state;
        return (<div className={cx('summernote',id,'summernote-'+id)}></div>);
    }
}
