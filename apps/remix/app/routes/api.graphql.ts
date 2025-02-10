import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { env } from '@/lib/envNode';

const response = (request: Request) =>
  env.NODE_ENV === 'development'
    ? new Response(null)
    : import('../../../api/src/main').then(({ handleRequest }) => handleRequest(request, {}));

export async function loader({ request }: LoaderFunctionArgs) {
  return await response(request);
}

export async function action({ request }: ActionFunctionArgs) {
  return await response(request);
}
