"use client";

import { useForm } from "react-hook-form";
import { CountrySelectField } from "@/components/forms/country-select-field";
import FooterLink from "@/components/forms/footer-link";
import InputField from "@/components/forms/input-field";
import SelectField from "@/components/forms/select-field";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "IN",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="form-title">Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          register={register}
          label="Full Name"
          name="fullName"
          error={errors.fullName}
          placeholder="John Doe"
          validation={{ required: "Full name is required", minLength: 2 }}
        />
        <InputField
          register={register}
          label="Email"
          name="email"
          error={errors.email}
          placeholder="johndoe@example.com"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\w+@\w+.\w+$/,
              message: "Please provide a valid email",
            },
          }}
        />
        <InputField
          register={register}
          label="Password"
          name="password"
          type="password"
          error={errors.password}
          placeholder="Enter a strong password"
          validation={{ required: "Password is required", minLength: 8 }}
        />

        <CountrySelectField
          control={control}
          label="Country"
          name="country"
          error={errors.country}
          required
        />

        <SelectField
          control={control}
          name="investmentGoals"
          label="Investment Goals"
          options={INVESTMENT_GOALS}
          error={errors.investmentGoals}
          placeholder="Select your investment goal"
          rules={{ required: "Investment goal is required" }}
        />
        <SelectField
          control={control}
          name="riskTolerance"
          label="Risk Tolerance"
          options={RISK_TOLERANCE_OPTIONS}
          error={errors.riskTolerance}
          placeholder="Select your risk level"
          rules={{ required: "Risk Tolerance is required" }}
        />
        <SelectField
          control={control}
          name="preferredIndustry"
          label="Preferred Industry"
          options={PREFERRED_INDUSTRIES}
          error={errors.preferredIndustry}
          placeholder="Select your preferred industry"
          rules={{ required: "Preferred Industry is required" }}
        />

        <Button
          type={"submit"}
          disabled={isSubmitting}
          className="yellow-btn mt-5 w-full"
        >
          {isSubmitting ? "Creating Account" : "Start your investing journey"}
        </Button>
        <FooterLink
          text="Already have an account?"
          linkText="Sign in"
          href="/sign-in"
        />
      </form>
    </div>
  );
};

export default SignUp;
