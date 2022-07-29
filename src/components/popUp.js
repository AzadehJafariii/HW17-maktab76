const PopUp = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close ms-5"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <h5 class="modal-title me-5" id="exampleModalLabel">
                خلاصه فیلم
              </h5>
            </div>
            <div class="text-end p-3">
              دکتر بروس بنر که تحت تأثیر پرتو گاما در پروژه‌ای برای تولید
              ابرانسان به هالک تبدیل شد، حدود ۵ سال تحت تعقیب است و در ۵ ماه
              اخیر توانسته‌است خود را کنترل کند. بروس برای درمان خود با دانشمندی
              به اسم مستعار دکتر آبی در ارتباط است تا اینکه در اثر یه اشتباه
              شناسایی می‌شود و ژنرال تاندربولت راس هم هنگامیکه از محل او اطلاع
              پیدا می‌کند یک تیم از بهترین جنگجویان خود را به برزیل می‌فرستد.
              آن‌ها بنر را تعقیب می‌کنند و در یک کارخانه او را گیر می‌اندازند
              ولی بروس خشمگین شده و به هالک تبدیل می‌شود و بسیاری از آن سربازان
              را می‌کشد. ادامه موضوع فیلم در دانشنامه آزاد ویکی پدیا قابل مشاهده
              است
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
