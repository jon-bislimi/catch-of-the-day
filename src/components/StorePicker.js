import React , { Fragment } from "react";
import { getFunName } from '../helpers';
import PropTypes from "prop-types";

class StorePicker extends React.Component {
    myInput = React.createRef();
    static propTypes = {
        history: PropTypes.object
    };

    goToStore = event => {
        //1. Stop the form from submitting
        event.preventDefault();
        //2. get the text from that input 
        const storeName = this.myInput.current.value;
        //3. Change the page to /store/whateever-they-entered
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (

         <form className="store-selector" onSubmit={this.goToStore}> 
            <h2>Please enter a store</h2>
            <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
            <button type="submit">Visit Store -</button>
        </form>
        );
    }
}

export default StorePicker;