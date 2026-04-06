import { ImageResponse } from "@vercel/og";

export const prerender = false;

export async function GET({ url }: { url: URL }) {
  const title = url.searchParams.get('title') || 'Jiangsung';

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: 60,
          background: '#101828',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>{title}</div>
        <div style={{ fontSize: 30, marginTop: 20 }}>
          Fullstack Developer
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}