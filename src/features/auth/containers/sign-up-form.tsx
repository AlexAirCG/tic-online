"use client";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitButton } from "../ui/submit-button";
import { BottomLink } from "../ui/link";
import { ErrorMassage } from "../ui/submit-button copy";
import { useActionState } from "@/shared/lib/react";
import { signUpAction, SignUpFormState } from "../actions/sign-up";
import { routes } from "@/kernel/routes";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUpFormState,
  );

  return (
    <AuthFormLayout
      title="Регистрация"
      description="Создайте свой аккауне что бы войти в игру"
      action={action}
      fields={<AuthFields {...formState} />}
      actions={<SubmitButton isPending={isPending}>Регистрация</SubmitButton>}
      error={<ErrorMassage error={formState.errors?._errors} />}
      link={
        <BottomLink
          text="Уже есть аккаунт?"
          linkText="Войти"
          url={routes.signIn()}
        />
      }
    />
  );
}
