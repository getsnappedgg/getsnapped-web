const RegisterUser = () => {
	return (
		<>
			<section className="flex flex-row h-screen w-auto bg-gray-dark">
				<div className="container mx-auto mt-32 px-12 lg:px-72 lg:mt-32">
					<h1 className="text-3xl text-white font-normal flex flex-row tracking-wide">
						Create new account
						<div className="text-3xl relative bottom-0 text-violet-500 font-extrabold">
							.
						</div>
					</h1>
					<form className="flex flex-col">
						<div className="flex flex-col justify-between">
							<label className="m-2 text-neutral-100 text-lg font-semibold mb-2">
								Username
							</label>
							<input
								className="m-2 placeholder:p-2 text-white bg-slate-600 rounded-xl p-3"
								type="text"
								placeholder="Username"
							/>
						</div>
						<div className="flex flex-col justify-between">
							<label className="m-2 text-neutral-100 text-lg font-semibold mb-2">
								Email
							</label>
							<input
								className="m-2 placeholder:p-2 text-white bg-slate-600 rounded-xl p-3"
								type="email"
								placeholder="Email"
							/>
						</div>
						<div className="flex flex-col justify-between">
							<label className="m-2 text-neutral-100 text-lg font-semibold mb-2">
								Password
							</label>
							<input
								className="m-2 placeholder:p-2
                                text-white bg-slate-600 rounded-xl p-3"
								type="password"
								placeholder="Password"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
								required
							/>
						</div>
						<div className="flex flex-col justify-between">
							<label className="m-2 text-neutral-100 text-lg font-semibold mb-2">
								Confirm Password
							</label>
							<input
								className="m-2 placeholder:p-2
                                text-white bg-slate-600 rounded-xl p-3"
								type="password"
								placeholder="Password"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
								required
							/>
						</div>
						<button
							className="bg-violet-500 text-white hover:bg-violet-600 rounded-md m-4 p-3"
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
		</>
	);
};
export default RegisterUser;
