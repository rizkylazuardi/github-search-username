import React, { Component } from 'react';
import { Row, Col, Label, Input, Button, Table } from 'reactstrap';
import { connect  } from 'react-redux';
import { fetchData } from '../store/action/search-box-action';
const defaultUsername = 'rizkylazuardi';

class HomePage extends Component{
    state = {
        username: defaultUsername
    }

    onInputBlur = (e) => {
        const username = e.target.value;
        this.setState({username});
    }

    onSubmit = () => {
        this.props.fetchData(this.state.username);
    }

    renderTableBody = () => {
        const { listData } = this.props;
        let result;
        if (listData.length == 0){
            result = (
                <React.Fragment>
                    <tr>
                        <td colSpan={5}>
                            No Data Found
                        </td>
                    </tr>
                </React.Fragment>
            );
        }else{
            result = (
                listData.map((item, idx) => {
                    return (
                    <tr>
                        <td>{idx+1}</td>
                        <td>{item.description}</td>
                        <td>{item.git_url}</td>
                        <td>{item.created_at}</td>
                        <td>
                            no action
                        </td>
                    </tr>  
                    );
                })
            );
        }
        return result;
    }

    render(){
        const { loading, listData } = this.props;
        return (
        <React.Fragment>
            <Row style={{ marginTop:'10px' }}>
                <Col md="2" style={{textAlign: 'right'}}>
                    <Label>github username</Label>
                </Col>
                <Col md="4">
                    <Input type="text" itemID="username" defaultValue={defaultUsername}  onBlur={this.onInputBlur} />
                </Col>
                <Col>
                    <Button disabled={loading} type="button" onClick={this.onSubmit}>{loading ? 'Loading' : 'Search'}</Button>
                </Col>
            </Row>
            <Row>
                <Col md={8} style={{padding: '20px', marginLeft: '25px'}}>
                    <Table hover={true} striped={true}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Project Desc</th>
                                <th>Url</th>
                                <th>Created Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableBody()}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state.searchReducer,
});


const mapDispatchToProps = (dispatch => ({
    fetchData,
}))();

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);