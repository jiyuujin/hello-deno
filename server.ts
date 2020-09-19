// https://deno.land/std@0.68.0
import { serve } from 'https://deno.land/std@0.68.0/http/server.ts'

const s = serve({ port: 8008 })
console.log('http://localhost:8008/')

for await (const req of s) {
    req.respond({ body: 'Hello World\n' })
}
