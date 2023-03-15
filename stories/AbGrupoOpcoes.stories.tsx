// stories/AbTag.stories.tsx

import React from 'react';
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Componentes/AbGrupoOpcoes',
  component: AbGrupoOpcoes,
} as ComponentMeta<typeof AbGrupoOpcoes>;

const Template: ComponentStory<typeof AbGrupoOpcoes> = args => (
  <AbGrupoOpcoes />
);

export const Padrao = Template.bind({});
