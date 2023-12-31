import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") as string;
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
