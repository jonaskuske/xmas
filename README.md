# Adventskalender

***In case it's not december and the doors are locked, you can still open them by pasting the following code into the console:***
```javascript
$('.door').forEach(door => {
  door.on('click', () => {
    $('#gift-view-date').txt(door.nextChild.textContent);
    $('.door-wrapper')[0].addClass('hidden');
    $('.content-wrapper')[0].removeClass('hidden');
  });
  door.removeClass('disabled');
});
```

## Instructions

#### Install dependencies
> npm install

#### Start (live) dev server on :8080
> npm run dev

#### Build for production
> npm run build
