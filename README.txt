QUIZMED - FLUTTER PROJECT (FULL)
--------------------------------
Contenido:
- Proyecto Flutter listo para compilar (incluye carpeta android/)
- lib/main.dart -> app que carga assets/questions.json
- assets/questions.json -> 200 preguntas (uso educativo)
- pubspec.yaml -> registra el asset

INSTRUCCIONES RÁPIDAS (desde Codemagic o PC):

Si usás Codemagic (recomendado ahora desde tu celular):
1) Sube este ZIP como repositorio en GitHub o súbelo directamente a Codemagic (Start new app -> Upload).
2) En Codemagic configura el build para Android (APK) y lanza la compilación.
3) Descarga el APK cuando termine y instálalo en tu Android.

Notas importantes:
- Intenté incluir la estructura 'android/' necesaria para que Codemagic compile. Algunas plataformas de CI usan su propio Gradle y herramientas, por lo que no incluí binarios pesados (gradle wrapper jar). Codemagic suele funcionar con esta estructura.
- Si Codemagic muestra errores relacionados con Gradle/SDK, dímelo y te doy pasos concretos para ajustar (ej: elegir versión de Java/Gradle en la UI de Codemagic).
- No puedo compilar el APK aquí, pero este paquete está listo para que Codemagic lo construya sin que tengas que usar una PC.

Si necesitás que lo suba yo a GitHub y te conecte con Codemagic, puedo darte instrucciones para autorizar o ayudarte a crear el repo y configurar el build.
