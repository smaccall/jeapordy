import React from 'react';
import './App.css';

var jeapordyInfo= [
                   {id: 1, category:"We've got it!", val1: 200, a1: "A place where you can get technical help", val2: 400, a2: "A duplicate sheet for giving specific instructions to clients", val3: 600, a3: "A general prewritten standard plan for a prescribed condition", val4:800, a4: "A place where printers and supervisors can be found", val5: 1000, 
                    a5: "A form used to document  training to unregulated professionals"
                   },
                   {id: 2, category:"You can do it", val1: 200, 
                    a1: "Days of training provided at the beginning of one's VHA career", 
                    val2: 400, 
                    a2: "A specific course designed to help learn hoyer lifts and trasnfers", 
                    val3: 600, a3: "VHA courses that are deemed essential for everyone to take.", val4:800, 
                    a4: "Specific tools used to compare progress pre and post treatment.", 
                    val5: 1000, 
                    a5: "An opportunity to look at your specific skills with your supervisor.", 
                    },
                   {id: 3, category:"Don't tip the scales", val1: 200, a1: "A communication strategy used to minimize calls and emails about new referrals.", 
                    val2: 400, a2: "A gathering of similarly trained individuals to discuss common issues.", val3: 600, 
                    a3: "A place where handouts and policies can be found easily.", val4:800, 
                    a4: "Committee design to prevent spread of disease.",  
                    val5: 1000, a5: "A policy that protects people who report misconduct.", 
                   },
                   {id: 4, category:"It's all about you", val1: 200, a1: "\"Is there anything I can do for you today?\" is part of this.",
                    val2: 400, a2: "\"What outcomes are you looking for from your care?\" is part of this", val3: 600, a3: "\"What time works best for you?\" is part of this", val4:800, a4: "Activities designated for a specific client.", val5: 1000, 
                    a5: "Training at VHA to help therapost identify ways to tailor their work to the client"
                   },
                   {id: 5, category:"We're in this together", val1: 200, 
                    a1: "Given to all clients at the beginning of care to explain their rights and responsibilites", val2: 400, 
                    a2: "A group designed to address mobility equipment needs", 
                    val3: 600, a3: "A green card designed to help clients know the next steps when their service has ended", val4:800, 
                    a4: "A series of sessions designed for children with complex medical needs to get together on a social level",
                    val5: 1000, a5: "Annual workshops providing interprofessional education for paediatrics and palliative workers"
                   }
                  ];



class CreateBoard extends React.Component{
    render(){
        return(
            <div className="board">
                <Categories jeapordy={this.props.jeapordy}/>
                <Rows jeapordy={this.props.jeapordy} value="$200"/>
                <Rows jeapordy={this.props.jeapordy} value="$400"/>
                <Rows jeapordy={this.props.jeapordy} value="$600"/>
                <Rows jeapordy={this.props.jeapordy} value="$800"/>
                <Rows jeapordy={this.props.jeapordy} value="$1000"/>
            </div>
        );
    }
}

class Categories extends React.Component{
    render(){
        var content = this.props.jeapordy;
        var category = content.map(cat => <div className="category" key={cat.id}><h1>{cat.category}</h1></div>);
        return(
            <div className="row">{category}</div>
        );
    }
}

class Rows extends React.Component{
    disappear(){
    var selected = document.querySelectorAll('.selected');
    for (var i=0; i< selected.length;i++){
        selected[i].classList.add('disappear');
      }
    }
    onSelectionMade(e, answer, id){
            var location = document.getElementById(id);
            location.classList.add("selected");
            location.innerHTML = answer;
            setTimeout(() => this.disappear(), 15000);
        }
    render(){
        var content = this.props.jeapordy;
        if (this.props.value === "$200"){
            var row = content.map(cat => <div className="number" key={cat.id}><h1 id={`${cat.id}-200`} onClick={(e) => this.onSelectionMade(e, cat.a1,`${cat.id}-200`)} key={cat.id} className={`value ${this.props.value}`}>{this.props.value}</h1></div>);
        } else if (this.props.value === "$400"){
            var row = content.map(cat => <div className="number" key={cat.id}><h1 id={`${cat.id}-400`} onClick={(e) => this.onSelectionMade(e, cat.a2, `${cat.id}-400`)} key={cat.id} className={`value ${this.props.value}`}>{this.props.value}</h1></div>);
        } else if (this.props.value === "$600"){
            var row = content.map(cat => <div className="number" key={cat.id}><h1 id={`${cat.id}-600`} onClick={(e) => this.onSelectionMade(e, cat.a3,`${cat.id}-600`)} key={cat.id} className={`value ${this.props.value}`}>{this.props.value}</h1></div>);
        } else if (this.props.value === "$800"){
            var row = content.map(cat => <div className="number" key={cat.id}><h1 id={`${cat.id}-800`} onClick={(e) => this.onSelectionMade(e, cat.a4, `${cat.id}-800`)} key={cat.id} className={`value ${this.props.value}`}>{this.props.value}</h1></div>);
        } else{
            var row = content.map(cat => <div className="number" key={cat.id}><h1 id={`${cat.id}-1000`} onClick={(e) => this.onSelectionMade(e, cat.a5, `${cat.id}-1000`)} key={cat.id} className={`value ${this.props.value}`}>{this.props.value}</h1></div>);
        }
        return(
            <div className="row">{row}</div>
        );
    }
}

function App() {
  return (
    <div className="App">
        <CreateBoard jeapordy={jeapordyInfo}/>   
    </div>
  );
}

export default App;
