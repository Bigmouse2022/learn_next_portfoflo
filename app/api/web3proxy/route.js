export async function POST(request) {
  try {
    const body = await request.json();
    const access_key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY; // 从环境变量读取密钥
    
    // 关键修复：将access_key合并到请求体顶层
    const payload = {
      ...body,
      access_key // 确保在顶层
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload) // 发送合并后的数据
    });
    
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Proxy failed" }), { status: 500 });
  }
}