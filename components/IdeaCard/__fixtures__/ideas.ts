import faker from 'faker';

import { Idea } from '../../../model/idea/idea';

export const ideas: Idea[] = [...Array(8)].map(() => {
  const title = faker.lorem.sentence();
  return {
    id: faker.random.uuid(),
    slug: faker.helpers.slugify(title),
    title: title,
    group: faker.random.arrayElement(["Group A", "Group B", "Group C"]),
    category: faker.random.arrayElement([
      "Category A",
      "Category B",
      "Category C",
    ]),
    image: faker.image.technics(),
    startsAt: faker.date.future(),
    online: faker.random.boolean(),
    attendees: [],
  };
});
