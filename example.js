import React from 'react';
import ReactDOM from 'react-dom';
import Summernote from './src/ReactSummernote.jsx';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editors: ['<div>Hello World!</div>']
        };
        this.change = (position, content) => {
            let editors = this.state.editors;
            editors[position] = content;
            this.setState({editors: editors});
        };

        this.addAnotherEditor = () => {
            let editors = this.state.editors;
            editors.push('');
            this.setState({editors: editors});
        };

        this.removeEditor = (position) => {
            let editors = this.state.editors.filter((editor, index)=>index !== position);
            this.setState({editors: editors});
        };
    }

    render() {
        const height = 200;
        return (
            <div>
                <div className="btn btn-primary" onClick={this.addAnotherEditor}>Add Another Editor</div>
                {this.state.editors.map((content, position)=>{
                    return (
                        <div key={position+'inner'} >
                            <div>
                                <Summernote height={height} placeholder="Hello Morgan" onChange={(content)=>this.change(position,content)} defaultValue={content} />
                            </div>
                            <div className="btn btn-danger" onClick={()=>this.removeEditor(position)} >Remove Editor</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

Example.displayName = 'Example';


ReactDOM.render(<Example />, document.getElementById('app'));
