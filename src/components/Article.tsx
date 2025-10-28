import { Book } from "./icons/book";
import { HistoryTimerIcon } from "./icons/clock2";

export default function Article({
  title,
  date,
  href,
  disabled,
}: {
  title: string;
  date: string;
  href: string;
  disabled?: boolean;
}) {
  return (
    <a
      href={href}
      className={`font-inter flex w-full justify-between rounded-lg border border-gray-200 p-3 text-[16px] leading-normal ${
        disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-100/55"
      }`}
    >
      <div>
        <p className="text-gray-1200 font-medium">{title}</p>
        <div className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-gray-500">
          {!disabled && <p>{date}</p>}
          <span className="flex items-center gap-2">
            {disabled && <p>Check back later</p>}
            {disabled ? (
              <HistoryTimerIcon className="h-4 w-4" strokeWidth={2.25} />
            ) : (
              <Book className="h-4 w-4" strokeWidth={2.25} />
            )}
          </span>
        </div>
      </div>
    </a>
  );
}
