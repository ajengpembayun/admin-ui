import LabeledInput from "../LabeledInput";
import Button from "../Button";
import { Link } from "react-router-dom";

function FormSignUp() {
  return (
    <>
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="font-bold text-sm">
          Create an account
        </h2>
      </div>

      {/* Form */}
      <div className="text-left">
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

          <p className="text-[10px] text-gray-03 mb-4 text-center">
            By continuing, you agree to our{" "}
            <span className="text-[var(--color-primary)]">
              terms of service.
            </span>
          </p>

          <Button>
            Sign up
          </Button>
        </form>
      </div>

      {/* Divider */}
      <div className="my-6 flex items-center text-[10px] text-gray-03">
        <div className="flex-1 border-t border-gray-05"></div>

        <span className="px-2 bg-special-mainBg">
          or sign up with
        </span>

        <div className="flex-1 border-t border-gray-05"></div>
      </div>

      {/* Google Button */}
      <div className="mb-6">
        <Button
          type="button"
          variant="secondary"
        >
          <span className="flex items-center justify-center">
            Continue with Google
          </span>
        </Button>
      </div>

      {/* Login Link */}
      <div className="text-center">
        <span className="text-xs text-gray-02">
          Already have an account?
        </span>

        <Link
          to="/login"
          className="ml-1 text-xs font-bold text-[var(--color-primary)] cursor-pointer"
        >
          Sign in here
        </Link>
      </div>
    </>
  );
}

export default FormSignUp;