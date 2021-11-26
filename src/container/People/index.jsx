import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/action/people'

class People extends Component {

    addPerson = ()=>{
        console.log("addPerson")
        const name = this.nameNode.value
        const age = parseInt(this.ageNode.value)
        const {addPerson} = this.props
        addPerson({id:nanoid(), name:name, age:age})
    }

    render() {
        const {count,persons} = this.props
        console.log(persons + "person")
        return (
            <div>
                <h2>当前数值为{count}</h2>
                <input  ref={nameNode=>{this.nameNode = nameNode}} type="text" placeholder='姓名'/>&nbsp;
                <input ref={ageNode=>{this.ageNode = ageNode}} type="text" placeholder='年龄'/>&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        persons.map((person)=>{
                            return  <li key={person.id}>name:{person.name}, age:{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>({count:state.count, persons:state.people})
    ,{
        addPerson
    }
)(People)