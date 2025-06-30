import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Базовая конфигурация для всех JS файлов
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettier.rules,

      // Обязательные правила
      // Запрет var
      'no-var': 'error',
      // Использование console.log
      'no-console': 'warn',
      //Ошибка при неиспользуемых переменных
      'no-unused-vars': 'error',
      // Prettier integration
      'prettier/prettier': 'error',
      //Требование использования строгого равенства (===)
      eqeqeq: 'error',

      // Ошибки и предупреждения
      'no-debugger': 'error',

      // Лучшие практики
      curly: 'error',
      'prefer-const': 'error',

      // Дополнительные правила для современного JS
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'no-duplicate-imports': 'error',
    },
  },

  // Игнорируемые файлы
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '*.min.js'],
  },
];
