import Image from "next/image";

interface EmptyPorps {
  label: string;
}

export const Empty = ({ label }: EmptyPorps) => {
  return (
    <section className="h-full p-20 flex flex-col items-center">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </section>
  );
};
