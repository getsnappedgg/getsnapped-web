import { Link } from "react-router-dom";

const LoginUser = () => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
		<>
			<section className="flex flex-row h-screen w-screen bg-gray-dark">
				<div className="container mt-24 px-24  lg:px-72 md:px-48">
					<h1 className="text-3xl text-white font-normal flex flex-row tracking-wide">
						Log In
						<div className="text-3xl relative bottom-0 text-primary font-extrabold">
							.
						</div>
					</h1>
					<form className="flex flex-col mt-8">
						<div className="flex flex-col justify-between">
							<label className="m-2 text-neutral-100 text-lg font-semibold mb-2">
								Username
							</label>
							<input
								className="m-2 placeholder:p-2 text-white drop-shadow-sm bg-slate-600 rounded-xl p-3"
								type="text"
								placeholder="Username"
							/>
						</div>
						<div className="flex flex-col justify-between">
							<label className="m-2 text-neutral-100 text-lg font-semibold mb-2">
								Password
							</label>
							<input
								className="m-2 placeholder:p-2 text-white drop-shadow-sm bg-slate-600 rounded-xl p-3"
								type="password"
								placeholder="Password"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
								required
							/>
							<div className="flex flex-row text-white space-x-3 m-2">
								<input type="checkbox" />
								<p>Remember Me</p>
							</div>
						</div>
						<button
							className="bg-violet-500 text-white hover:bg-violet-600 rounded-md m-4 p-3"
							type="submit"
						>
							Submit
						</button>
						<p className="m-2 text-white">
							Don't have an account?&nbsp;
							<Link to="/register" className="text-blue">
								Sign up
							</Link>
						</p>
					</form>
				</div>
			</section>
		</>
	);
};
export default LoginUser;
