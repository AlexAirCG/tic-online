"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { BottomLink } from "../ui/link";
import { ErrorMassage } from "../ui/submit-button copy";
import { signInAction, SignInFormState } from "../actions/sign-in";
import { useActionState } from "@/shared/lib/react";
import { routes } from "@/kernel/routes";

export function SignInForm() {
  const [formState, action, isPending] = useActionState(
    signInAction,
    {} as SignInFormState,
  );

  return (
    <AuthFormLayout
      title="Вход"
      description="С возвращением! Пожалуйста войдите в свой аккаунт."
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Войти</SubmitButton>}
      error={<ErrorMassage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="Еще нет акканта?"
          linkText="Регистрация"
          url={routes.signUp()}
        />
      }
    />
  );
}
