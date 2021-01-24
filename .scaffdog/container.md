---
name: 'container'
description: 'For generate container files'
message: 'Please enter component name.'
root: './src/containers'
output: ''
ignore: ['**/*']
---

# `{{ input | pascal }}/index.ts`

```typescript
export { {{ input | pascal }} } from './component';
```

# `{{ input | pascal }}/component.tsx`

```typescript
import { use{{ input | pascal }} } from './hooks'

type {{ input | pascal }}Props = {}

export const {{ input | pascal }}:React.VFC<{{ input | pascal }}Props> = ({

}: {{ input | pascal }}Props) => {
  const {

  } = use{{ input | pascal }}()
  return (

  )
};
```

# `{{ input | pascal }}/hooks.tsx`

```typescript
export const use{{ input | pascal }} = () => {
  return {}
};
```

> # `{{ input | pascal }}/{{ input | pascal }}.test.tsx`

> ```typescript
> import React from 'react';
> import { render } from '@testing-library/react';
> import { {{ input | pascal }} } from './{{ input | pascal }}';

> describe('{{ input | pascal }}', () => {
>   test('__TODO__', () => {
>     expect({{ input | camel }}()).toBe(true);
>   });
> });
> ```
