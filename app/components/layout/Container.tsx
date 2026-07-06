type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
   <div className="mx-auto max-w-screen-2xl px-6">
      {children}
    </div>
  );
}