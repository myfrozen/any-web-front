---
name: 'component'
description: 'For generate component files'
message: 'Please enter component name.'
root: './src/components'
output: ''
ignore: ['**/*']
---

# `{{ input | pascal }}/index.ts`

```typescript
export { {{ input | pascal }} } from './component';
```

# `{{ input | pascal }}/component.tsx`

```typescript
type {{ input | pascal }}Props = {}

export const {{ input | pascal }}:React.VFC<{{ input | pascal }}Props> = ({

}: {{ input | pascal }}Props) => {
  return (

  )
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
