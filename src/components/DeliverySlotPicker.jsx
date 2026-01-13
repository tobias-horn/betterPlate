import { useState } from 'react';
import { Calendar, Clock, Check } from 'lucide-react';

const DeliverySlotPicker = ({ selectedSlot, onSelectSlot }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Available time slots
  const timeSlots = [
    { id: '08-10', label: '08:00 - 10:00', available: true },
    { id: '10-12', label: '10:00 - 12:00', available: true },
    { id: '12-14', label: '12:00 - 14:00', available: false },
    { id: '14-16', label: '14:00 - 16:00', available: true },
    { id: '16-18', label: '16:00 - 18:00', available: true },
    { id: '18-20', label: '18:00 - 20:00', available: true },
    { id: '20-22', label: '20:00 - 22:00', available: true },
  ];

  const formatDate = (date) => {
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const day = days[date.getDay()];
    const dayNum = date.getDate();
    const month = date.toLocaleDateString('de-DE', { month: 'short' });
    return { day, dayNum, month };
  };

  const handleSelectSlot = (date, timeSlot) => {
    const slot = {
      date: date.toISOString().split('T')[0],
      dateFormatted: date.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }),
      time: timeSlot.label,
      timeId: timeSlot.id
    };
    onSelectSlot(slot);
  };

  const isSelected = (date, timeSlot) => {
    if (!selectedSlot) return false;
    return selectedSlot.date === date.toISOString().split('T')[0] && selectedSlot.timeId === timeSlot.id;
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-4">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <Calendar className="text-rewe-red" size={18} />
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Liefertermin wählen</h3>
      </div>

      {/* Date Selection */}
      <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-3 sm:mb-4 scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
        {dates.map((date, idx) => {
          const { day, dayNum, month } = formatDate(date);
          const isSelectedDate = selectedDate?.toDateString() === date.toDateString();
          const isToday = idx === 0;
          
          return (
            <button
              key={idx}
              onClick={() => setSelectedDate(date)}
              className={`flex flex-col items-center min-w-[58px] sm:min-w-[70px] p-2 sm:p-3 rounded-lg sm:rounded-xl border-2 transition-all active:scale-95 ${
                isSelectedDate
                  ? 'border-rewe-red bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className={`text-[10px] sm:text-xs font-medium ${isToday ? 'text-rewe-red' : 'text-gray-500'}`}>
                {isToday ? 'Heute' : day}
              </span>
              <span className="text-lg sm:text-xl font-bold text-gray-800">{dayNum}</span>
              <span className="text-[10px] sm:text-xs text-gray-500">{month}</span>
            </button>
          );
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Clock className="text-gray-400" size={14} />
            <span className="text-xs sm:text-sm font-medium text-gray-600">Verfügbare Zeitfenster</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => slot.available && handleSelectSlot(selectedDate, slot)}
                disabled={!slot.available}
                className={`p-2 sm:p-3 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1 sm:gap-2 active:scale-95 ${
                  isSelected(selectedDate, slot)
                    ? 'border-rewe-red bg-rewe-red text-white'
                    : slot.available
                      ? 'border-gray-200 hover:border-rewe-red text-gray-700'
                      : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSelected(selectedDate, slot) && <Check size={14} />}
                {slot.label}
                {!slot.available && <span className="text-[10px]">(belegt)</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Slot Summary */}
      {selectedSlot && (
        <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-1.5 sm:gap-2 text-green-700">
            <Check size={16} />
            <span className="font-medium text-xs sm:text-sm">
              {selectedSlot.dateFormatted}, {selectedSlot.time}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliverySlotPicker;
