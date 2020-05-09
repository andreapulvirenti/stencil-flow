import { Component, h, Prop, State } from '@stencil/core'
@Component({
    tag: 'dialog-history',
    styleUrl: 'dialog-history.css'
  })
  export class DialogHistory {

    @Prop() DialogHistoryText: string[];


    renderHistory(){
        if(this.renderHistory.length > 0)
        return this.DialogHistoryText.map(item => <div>{ item }</div>)

        return '';
    }

    render(){
       return (
            <div>
                {this.renderHistory()}
            </div>
        )
    }
  }