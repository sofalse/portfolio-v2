import PrimaryButton from './buttons/primary';

export default function Header() {
  return (
    <header className="h-30 fixed flex w-full place-content-end px-5 py-5 align-middle backdrop-blur">
      <PrimaryButton>Contact me</PrimaryButton>
    </header>
  );
}
