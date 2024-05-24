export function ButtonTypes({ type }: { type: string }) {
  return <button class={`btn btn-sm bg-${type} border-none`}> {type}</button>;
}
