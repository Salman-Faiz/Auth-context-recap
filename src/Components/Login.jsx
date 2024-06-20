import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const { signInUser } = useContext(AuthContext);


    const handleSignIn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        // call sign in user to log in into firebase
        signInUser(email, password)
            .then(result => {
                console.log('logged in successfully', result.user);
            })
            .catch(error => console.error(error.messege))
    }

    return (
        <div className="  bg-green-200 py-28 rounded-xl">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleSignIn} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-medium text-xl text-red-700">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button className="bg-green-400 py-2">logIn with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;