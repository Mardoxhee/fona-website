export async function getFileLink(file: string): Promise<string | undefined> {
  const baseUrl = process.env.NEXT_PUBLIC_FILE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_FILE_URL is not defined");
  }

  const encodedPath = file
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  const url = `${baseUrl.replace(/\/$/, "")}/minio/files/${encodedPath}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`getFileLink failed: ${res.status} ${res.statusText}`);
  }

  const payload = (await res.json()) as unknown;
  if (!payload || typeof payload !== "object") return undefined;

  const p = payload as {
    src?: unknown;
    data?: unknown;
  };

  if (typeof p.src === "string" && p.src.trim()) return p.src;

  if (typeof p.data === "string" && p.data.trim()) return p.data;

  if (p.data && typeof p.data === "object") {
    const d = p.data as { src?: unknown };
    if (typeof d.src === "string" && d.src.trim()) return d.src;
  }

  return undefined;
}
