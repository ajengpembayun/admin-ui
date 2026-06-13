import LabeledInput from "../LabeledInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import { Link } from "react-router-dom";

function FormSignIn() {
  return (
    <>
      {/* form start */}
      <div className="text-left">
        <form>
          <div className="mb-4">
            <LabeledInput
              label="Email address"
              type="email"
              placeholder="hello@example.com"
              name="email"
              id="email"
            />
          </div>

          <div className="mb-4">
            <LabeledInput
              label="Password"
              type="password"
              placeholder="************"
              name="password"
              id="password"
            />
          </div>

          <div className="mb-4 flex items-center">
            <CheckBox
              label="Keep me signed in"
              id="status"
              name="status"
              type="checkbox"
            />
          </div>

          <Button>Login</Button>
        </form>
      </div>

      {/* divider */}
      <div className="my-6 flex items-center text-[10px] text-gray-03">
        <div className="flex-1 border-t border-gray-05"></div>

        <span className="px-2 bg-special-mainBg">
          or sign in with
        </span>

        <div className="flex-1 border-t border-gray-05"></div>
      </div>

      {/* google button */}
      <div className="mb-6">
        <Button
          type="button"
          variant="secondary"
        >
          <span className="flex items-center justify-center">
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
            >
              <path
                d="M9.827 24c0-1.524.253-2.985.705-4.356L2.623 13.604A23.92 23.92 0 0 0 .214 24c0 3.737.867 7.261 2.62 10.388l7.905-6.05A14.9 14.9 0 0 1 9.827 24"
                fill="#FBBC05"
              />
              <path
                d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.823-5.532 7.017-9.511 13.182-9.511"
                fill="#EB4335"
              />
              <path
                d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.511l-7.909 6.04c3.822 7.761 11.804 13.071 21.091 13.071 5.732 0 11.204-2.035 15.311-5.848l-7.507-5.804c-2.118 1.335-4.785 2.052-7.804 2.052"
                fill="#34A853"
              />
              <path
                d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.345 5.467-4.8 7.014l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24"
                fill="#4285F4"
              />
            </svg>

            Continue with Google
          </span>
        </Button>
      </div>

      {/* link */}
      <div className="flex justify-center">
        <Link
          to="/register"
          className="text-[var(--color-primary)] text-xs font-bold cursor-pointer hover:opacity-80"
        >
          Create an account
        </Link>
      </div>
    </>
  );
}

export default FormSignIn;