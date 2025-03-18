import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app', () => {
            expect(component).toBeTruthy();
        });

        it('should display the initial input text as empty', () => {
            const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
            const paragraphElement = fixture.debugElement.query(By.css('p')).nativeElement;

            expect(inputElement.value).toBe('');
            expect(paragraphElement.textContent).toBe('Your Input: ');
        });

        it('should update the text property and display it when input changes', async () => {
            const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
            inputElement.value = 'Hello, world!';
            inputElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            await fixture.whenStable(); // Wait for Angular to complete change detection

            const paragraphElement = fixture.debugElement.query(By.css('p')).nativeElement;
            expect(component.text).toBe('Hello, world!');
            expect(paragraphElement.textContent).toBe('Your Input: Hello, world!');
        });
    });
});
