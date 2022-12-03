import { PushNotificationFeed } from "../../utils/types";

const NotificationCard = ({ data }: { data: PushNotificationFeed }) => {
  return (
    <a
      href={data.cta.length > 0 ? data.cta : "#"}
      className="relative mb-10 block overflow-hidden rounded-lg border border-gray-100 p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex">
        <div>
          <img
            src={data.icon}
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>

        <div className="my-auto ml-3 hidden flex-shrink-0 sm:block">
          <h3 className="text-xl font-bold text-gray-900">{data.title}</h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            By {data.app}
          </p>
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">{data.notification.body}</p>
      </div>

      {data.image && (
        <dl className="mt-6 flex">
          <img
            src={data.image}
            className="w-full rounded-lg object-cover shadow-sm"
          />
        </dl>
      )}
    </a>
  );
};

export default NotificationCard;
