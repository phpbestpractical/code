import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { Search } from './search';



export default class SearchComponent extends React.Component<{ nameList: any }, Search> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            list: []
        }
    }



    showList = () => {
        const { list } = this.state;
        return (
            <>
            <ListGroup>
                    {list.map((item : any) => <ListGroup.Item
                        key={item} >{item}</ListGroup.Item>)}

                </ListGroup>

            </>

        )
    }



    getData = () => {
        const { list } = this.state;
        if (list.length === 0) {
            return 'no data found';
        }
       return this.showList();
    }

    onNameChange = (e: any) => {
        let res: any = [];
        const nameValue = e.target.value;
        const { nameList } = this.props;


        if (nameValue.length > 0) {
            const regex = new RegExp(`^${nameValue}`, `i`);
            res = nameList.sort().filter((item: any) => regex.test(item));
        }


        this.setState(() => ({
            list: res,
            name: nameValue
        }));
    }







    render() {
        const { name } = this.state;

        return (
            <>
                <Form.Label htmlFor="basic-url">Search Type</Form.Label>
                <InputGroup className="md-6">
                    <Form.Control
                        placeholder="Search Data"
                        aria-label="search"
                        aria-describedby="basic-addon1"
                        className="mb-6 md-6"
                        onChange={this.onNameChange}
                    />
                </InputGroup>
                {this.getData()}

            </>

        );
    }

}