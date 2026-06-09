import LabeledInput from "../LabeledInput";
import Button from "../Button";

function FormSignUp() {
  return (
    <>
      <div className="text-center mb-6">
        <h2 className="font-bold text-sm">
          Create an account
        </h2>
      </div>

      <form>
        <div className="mb-4">
          <LabeledInput
            label="Name"
            type="text"
            placeholder="Tanzir Rahman"
            id="name"
            name="name"
          />
        </div>

        <div className="mb-4">
          <LabeledInput
            label="Email Address"
            type="email"
            placeholder="hello@example.com"
            id="email"
            name="email"
          />
        </div>

        <div className="mb-4">
          <LabeledInput
            label="Password"
            type="password"
            placeholder="************"
            id="password"
            name="password"
          />
        </div>

        <p className="text-[10px] text-gray-03 mb-4">
          By continuing, you agree to our terms of service.
        </p>

        <Button>
          Sign up
        </Button>
      </form>

      <div className="my-6 flex items-center text-[10px] text-gray-03">
        <div className="flex-1 border-t border-gray-05"></div>

        <span className="px-2 bg-special-mainBg">
          or sign up with
        </span>

        <div className="flex-1 border-t border-gray-05"></div>
      </div>

      <Button
        type="button"
        variant="secondary"
      >
        Continue with Google
      </Button>

      <div className="text-center mt-6">
        <a className="text-xs text-gray-02">
          Already have an account?
        </a>

        <a className="text-xs ml-1 text-primary font-bold">
          Sign in here
        </a>
      </div>
    </>
  );
}

export default FormSignUp;