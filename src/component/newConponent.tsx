import { Component } from "react"



import "./newConponent.css"
import "./Form/Index"
import Form from "./Form/Index"
import Tarefas from "./Tarefas/index"


export default class  NewConponent extends Component {
    
    state= {
        novaTarefa: '',
        tarefas: [],
        index: -1
    }
    componentDidMount(): void {

        let tarefas = JSON.parse(localStorage.getItem('tarefas'))
     
        if(!tarefas) return;

        this.setState({ tarefas })
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{tarefas:any}>): void {
        const { tarefas } = this.state;

        if( tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }
    handleSubmit = (e:any) =>{
        e.preventDefault()
        console.log("oi")
        const { tarefas,index }:any = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();
        if(tarefas.indexOf(novaTarefa) !== -1) return

        const  novasTarefas = [... tarefas];
        if(index === -1) {
            this.setState({
                tarefas: [... novasTarefas, novaTarefa],
                novaTarefa: ''
            })
        } else{
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                index: -1
            })
        }

    }
    handleChange = (e:any) =>{
        this.setState({
            novaTarefa: e.target.value
        })
    }
    handleEdit = (e:any, index:any) =>{
        const { tarefas } = this.state
        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    handleDelete = (e:any, index:any) =>{
        console.log("Delete", index)
        const { tarefas } = this.state;
        const novasTarefas = [... tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        })
    }
    render() {
        const { novaTarefa,tarefas }:any = this.state

        return <>
        <header className="header-banner">
        <h1>Lista Diaria</h1>
        </header>
        <section>
        <div>
            <div>
                <p>Adicionar Tarefa</p>
            </div>
            <div>
                
            </div>
        </div>
        
       

        <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            novaTarefa={novaTarefa}
           
        />
        <Tarefas tarefas={tarefas}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
        </section>
        </>
    }
}