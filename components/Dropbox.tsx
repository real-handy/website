type dropProps = {
  id: number;
  title: string;
  description: string;
}

interface dropboxProps {
  label: string;
  options: Array<dropProps>;
  value: string;
}

export default function Dropbox(props: dropboxProps) {

  return (
    <>
      <div className="relative">
        <select
          id={props.label}
          name={props.label}
          className={'mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'}
          defaultValue={props.value}
        >
          {props.options.map((o) => (
            <option value={o.id}>{o.title}</option>
          ))}
        </select>
    </div>
  </>
  )
}