import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { Search } from './search';


export default class SearchComponent extends React.Component<{}, Search> {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            list: []
        }
    }

    numberSelected = (data) => {
        this.setState(() => ({
            name: data,
            list: []
        }))
    }


    showList = () => {
        const { list } = this.state;
        return (
            <>
                <ListGroup>
                    {list.map(item => <ListGroup.Item
                        key={item} onClick={(e) => this.numberSelected(item)}>{item}</ListGroup.Item>)}

                </ListGroup>
            </>

        )
    }



    getData = () => {
        const { list } = this.state;
        if (list.length === 0) {
            return 'no data found';
        }
        this.showList();
    }

    onNameChange = (e) => {
        let res = [];
        const nameValue = e.target.value;
        const { nameList } = this.props;
        
        
        if (nameValue.length > 0) {
            res = nameList.filter(item => !nameList.includes(nameValue));
        }


        this.setState(() => ({
            list : res,
            name: nameValue
        }));
    }


    




    render() {
        const { name } = this.state;

        return (
            <>
                <Form.Label htmlFor="basic-url">Search Type</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search Data"
                        aria-label="search"
                        aria-describedby="basic-addon1"
                        onChange={this.onNameChange}
                    />
                </InputGroup>






                {this.getData()}
            </>

        );
    }

}