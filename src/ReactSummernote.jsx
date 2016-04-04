import React from 'react';
import $ from 'jquery';
import 'bootstrap';
import 'summernote';

class ReactSummernote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'summernote-'+Date.now()
        };
        this.initialized = false;
        this.change = (content, element)=> {
            return this.props.onChange && this.props.onChange(content, element);
        };
    }
    componentDidMount() {
        if (!this.initialized) {
            let options = {};
            Object.keys(this.props).forEach((key)=>{
                options[key] = this.props[key];
            });
            options.callbacks = {
                onChange: this.change
            };
            this.initialized = true;
            $('.'+this.state.id).summernote(options);
        }
    }
    componentWillUnmount() {
        $('.'+this.state.id).summernote('destroy');
        this.initialized = false; // Not that we have to do this.
    }
    render() {
        const {id} = this.state;
        const classString = `summernote ${id}`;
        return (
            <div>
                <div className={classString} dangerouslySetInnerHTML={{__html: this.props.defaultValue}} ></div>
            </div>
        );
    }
}

ReactSummernote.displayName = 'Summernote';

ReactSummernote.propTypes = {
    defaultValue: React.PropTypes.string,
    focus: React.PropTypes.bool,         // set focus to editable area after initializing summernote
    height: React.PropTypes.number,      // set editor height
    maxHeight: React.PropTypes.number,   // set maximum height of editor
    minHeight: React.PropTypes.number,   // set minimum height of editor
    onChange: React.PropTypes.func,      // onChange event that is passed to summernote
    placeholder: React.PropTypes.string  // placeholder
};

export default ReactSummernote;
