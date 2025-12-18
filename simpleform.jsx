export default function SimpleForm(){
    const handleSubmit=(even)=> {
        Event.preventDefault();
        console.log(Event.target.name.value)
        console.log(Event.target.email.value)
    }
    return <>
    <h1>SimpleForm</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name"/>
        <input type="text" name="email" placeholder="Enter Name"/>
        <button types="submit" classname="bg.color">submit</button>
        </form>
        </>
    }
