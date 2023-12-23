const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="h-screen flex justify-center items-center">
      {children}
    </header>
  );
};

export default AuthLayout;
