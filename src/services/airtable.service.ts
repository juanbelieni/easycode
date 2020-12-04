import airtable from '../configs/airtable.config';

export async function getServices() {
  const records = await airtable('serviços')
    .select({
      view: 'Grid view',
      fields: ['nome', 'categoria'],
    })
    .all();

  return records.map(({ id, fields }) => ({
    id: id as string,
    name: fields['nome'] as string,
    category: fields['categoria'] as string,
  }));
}

export async function getProfessionals(serviceName: string) {
  const records = await airtable('profissionais')
    .select({
      view: 'Grid view',
      fields: ['nome', 'celular', 'cidade'],
      filterByFormula: `ARRAYJOIN({serviço}, "")="${serviceName}"`,
    })
    .all();

  return records.map(({ id, fields }) => ({
    id: id as string,
    name: fields['nome'] as string,
    phone: fields['celular'] as string,
    city: fields['cidade'] as string,
  }));
}
