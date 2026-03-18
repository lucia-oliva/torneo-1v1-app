import { Crosshair, Minus, ShieldAlert } from 'lucide-react';
import FieldLabel from './FieldLabel';
import NumberField from './NumberField';
import SectionCard from './SectionCard';
import SelectField from './SelectField';
import EntryHistory from './EntryHistory';

export default function ControlPanel({
  slots,
  days,
  positions,
  sanctionTypes,
  selectedSlot,
  setSelectedSlot,
  selectedDay,
  setSelectedDay,
  killsInput,
  setKillsInput,
  positionInput,
  setPositionInput,
  sanctionTypeInput,
  setSanctionTypeInput,
  manualPenaltyInput,
  setManualPenaltyInput,
  currentSlotName,
  slotEntriesForSelectedDay,
  handleAddScore,
  handleAddSanction,
  updateEntry,
  deleteEntry,
  loading,
}) {
  return (
    <section className="panel-card">
      <div className="panel-controls">
        <div>
          <FieldLabel>Slot</FieldLabel>
          <SelectField
            value={selectedSlot}
            onChange={(event) => setSelectedSlot(event.target.value)}
            disabled={loading || slots.length === 0}
          >
            {slots.length === 0 ? (
              <option value="">Sin slots</option>
            ) : (
              slots.map((slot) => (
                <option key={slot._id} value={slot._id}>
                  {slot.name}
                </option>
              ))
            )}
          </SelectField>
        </div>

        <div>
          <FieldLabel>Día</FieldLabel>
          <div className="day-grid">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`day-chip ${selectedDay === day ? 'day-chip--active' : ''}`}
                disabled={loading}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <SectionCard icon={Crosshair} title="Carga de puntos" subtitle="Sumar">
          <div className="form-grid">
            <div>
              <FieldLabel>Kills</FieldLabel>
              <NumberField
                type="number"
                min="0"
                value={killsInput}
                onChange={(event) => setKillsInput(event.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <FieldLabel>Posición</FieldLabel>
              <SelectField
                value={positionInput}
                onChange={(event) => setPositionInput(event.target.value)}
                disabled={loading}
              >
                {positions.map((position) => (
                  <option key={position.value} value={position.value}>
                    {position.label}
                  </option>
                ))}
              </SelectField>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddScore}
            className="action-button action-button--neutral"
            disabled={loading || !selectedSlot}
          >
            Cargar puntos
          </button>
        </SectionCard>

        <SectionCard icon={ShieldAlert} title="Registro de sanciones" subtitle="Quitar" accent>
          <div className="form-grid">
            <div>
              <FieldLabel>Tipo</FieldLabel>
              <SelectField
                value={sanctionTypeInput}
                onChange={(event) => setSanctionTypeInput(event.target.value)}
                disabled={loading}
              >
                {sanctionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </SelectField>
            </div>

            <div>
              <FieldLabel>Quita manual</FieldLabel>
              <NumberField
                type="number"
                min="0"
                value={manualPenaltyInput}
                onChange={(event) => setManualPenaltyInput(event.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddSanction}
            className="action-button action-button--danger"
            disabled={loading || !selectedSlot}
          >
            <Minus size={16} />
            Registrar sanción
          </button>
        </SectionCard>
      </div>

      <EntryHistory
        slotName={currentSlotName}
        selectedDay={selectedDay}
        entries={slotEntriesForSelectedDay}
        positions={positions}
        sanctionTypes={sanctionTypes}
        onEditEntry={updateEntry}
        onDeleteEntry={deleteEntry}
      />
    </section>
  );
}