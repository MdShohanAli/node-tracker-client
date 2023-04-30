
import './InputForm.css'

const InputForm = () => {
    return (
        <div className=' part-color ' >
            <div className=" p-3  ">
                <form className="container" >
                    <div className="input-group mb-3 mt-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your name"
                            aria-label="Username"
                            name="userName"
                        />
                    </div>

                    <div className="input-group  ">
                        <span className="input-group-text">Your notes</span>
                        <textarea
                            className="form-control"
                            aria-label="With textarea"
                            name="textData"
                        ></textarea>
                    </div>
                    <div className="mt-4 text-center ">
                        <input type="submit" value="submit" className="btn btn-info" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InputForm;