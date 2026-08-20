from flask import Flask, request, Response
import edge_tts
import asyncio

app = Flask(__name__)

async def generate_audio(text, voice):
    communicate = edge_tts.Communicate(text, voice)
    audio_data = b""
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            audio_data += chunk["data"]
    return audio_data

@app.route('/api/py-tts', methods=['GET', 'POST'])
def tts():
    if request.method == 'POST':
        data = request.json or {}
        text = data.get('text', '')
        voice = data.get('voice', 'ja-JP-NanamiNeural')
    else:
        text = request.args.get('text', '')
        voice = request.args.get('voice', 'ja-JP-NanamiNeural')

    if not text:
        return {"error": "Text is required"}, 400

    try:
        audio_bytes = asyncio.run(generate_audio(text, voice))
        return Response(audio_bytes, mimetype="audio/mpeg")
    except Exception as e:
        return {"error": str(e)}, 500
