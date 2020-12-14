import { sandboxOf } from 'angular-playground';
import { TitleService } from '../shared/title.service';
import { PartComponent } from './part.component';

class MockTitleService {
  setTitle = () => {};
}

export default sandboxOf(PartComponent, {
  providers: [{ provide: TitleService, useClass: MockTitleService }],
})
  .add('default', {
    template: `<app-part></app-part>`
  });
